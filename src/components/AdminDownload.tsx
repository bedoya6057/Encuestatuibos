import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Lock, Download, ShieldCheck } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import * as XLSX from 'xlsx';
import { toast } from '@/hooks/use-toast';

export const AdminDownload = () => {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleLogin = () => {
    if (password === 'admin123') {
      setUnlocked(true);
    } else {
      toast({ title: 'Error', description: 'Contraseña incorrecta', variant: 'destructive' });
    }
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const { data, error } = await supabase.from('survey_responses').select('*');
      if (error) throw error;
      
      const age25_36 = data.filter(r => r.p1_edad >= 25 && r.p1_edad <= 36);
      const age37_50 = data.filter(r => r.p1_edad >= 37 && r.p1_edad <= 50);

      const downloadExcel = (rows: any[], filename: string) => {
        // Reordenar columnas para que los campos de control estén al final o principio según preferencia
        // En este caso, simplemente nos aseguramos de que existan en el objeto
        const formattedRows = rows.map(r => ({
          ...r,
          // Aseguramos que los campos de control aparezcan (si vienen de la DB)
          codigo_encuestador: r.codigo_encuestador || '',
          zona: r.zona || '',
          distrito: r.distrito || '',
          nombre_encuestado: r.nombre_encuestado || '',
          telefono: r.telefono || '',
        }));

        const ws = XLSX.utils.json_to_sheet(formattedRows);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Respuestas");
        XLSX.writeFile(wb, filename);
      };

      let downloadedAny = false;

      if (age25_36.length > 0) {
        downloadExcel(age25_36, 'Reporte_Edades_25_36.xlsx');
        downloadedAny = true;
      }
      if (age37_50.length > 0) {
        downloadExcel(age37_50, 'Reporte_Edades_37_50.xlsx');
        downloadedAny = true;
      }
      
      if (downloadedAny) {
        toast({ title: 'Éxito', description: 'Descarga completada' });
      } else {
        toast({ title: 'Atención', description: 'No hay respuestas en estos rangos de edades aún.' });
      }
    } catch (err: any) {
      console.error(err);
      toast({ title: 'Error', description: err.message, variant: 'destructive' });
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Dialog onOpenChange={(open) => { if (!open) { setPassword(''); setUnlocked(false); } }}>
      <DialogTrigger asChild>
        <button className="fixed top-4 left-4 z-[100] flex items-center justify-center p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm opacity-60 hover:opacity-100 transition-opacity">
          <Lock className="w-4 h-4 mr-1" />
          <span className="text-xs font-semibold">Admin</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{unlocked ? 'Panel de Administración' : 'Acceso Restringido'}</DialogTitle>
        </DialogHeader>
        <div className="py-4 flex flex-col items-center justify-center space-y-4">
          {!unlocked ? (
            <div className="w-full space-y-3">
              <p className="text-sm text-muted-foreground">Ingrese la contraseña para acceder a las descargas.</p>
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
              <Button onClick={handleLogin} className="w-full">Ingresar</Button>
            </div>
          ) : (
            <div className="w-full space-y-4 text-center">
              <ShieldCheck className="w-12 h-12 text-green-500 mx-auto" />
              <p className="text-sm text-muted-foreground">Tiene acceso a la exportación de respuestas de la OT. Se generarán 2 archivos Excel según los rangos de edades.</p>
              <Button onClick={handleDownload} disabled={downloading} className="w-full" size="lg">
                <Download className="w-4 h-4 mr-2" />
                {downloading ? 'Generando...' : 'Descargar Excel'}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
