
CREATE TABLE public.survey_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- A. DATOS DEL ENTREVISTADO / FILTRO
  p1_edad INTEGER,
  p2_genero TEXT,
  p3_profesion TEXT,
  p4_anos_profesion TEXT,
  p5_proyecto_activo TEXT,
  p6_medio_movilizacion TEXT,
  p7_usa_tubos_electricos TEXT,
  p8_ultima_compra TEXT,
  p9_frecuencia_uso TEXT,
  
  -- I. RECORDACION Y USO DE MARCAS
  p1_marcas_conocidas_espontanea TEXT[], -- P1 espontánea
  p2_otras_marcas_conocidas TEXT[], -- P2 RM
  p3_marcas_publicidad_vista TEXT[], -- P3
  p4_marcas_conocidas_lista TEXT[], -- P4 asistida
  p5_marcas_usadas TEXT[], -- P5
  p6_marca_preferida TEXT, -- P6 RU
  p1_otras_especificar TEXT,
  p7_punto_venta TEXT[], -- P7
  p7_punto_venta_otro TEXT,
  
  -- II. RECORDACION PUBLICITARIA
  p8_publicidad_marcas TEXT[], -- P8
  p9_medios_koplast TEXT[],
  p9_medios_tuboplast TEXT[],
  p9_medios_eurotubo TEXT[],
  p9_medios_pavco TEXT[],
  p9_medios_nicoll TEXT[],
  p9_medios_matusita TEXT[],
  p9_medios_plastisur TEXT[],
  p9_medios_indeco TEXT[],
  p10_recuerdo_indeco TEXT,
  
  -- III. EVALUACION ANUNCIO 1
  rotacion_orden TEXT, -- e.g. "AQ,AK,AL"
  a1_recuerda TEXT,
  a1_marca TEXT,
  a1_marca_otra TEXT,
  a1_donde_vio TEXT[],
  a1_mensaje TEXT[],
  a1_mensaje_otro TEXT,
  a1_atractivo INTEGER,
  a1_relevancia INTEGER,
  a1_calidad INTEGER,
  a1_intencion_compra INTEGER,
  a1_diferenciacion INTEGER,
  a1_visibilidad INTEGER,
  a1_medio_sugerido TEXT[],
  
  -- III. EVALUACION ANUNCIO 2
  a2_recuerda TEXT,
  a2_marca TEXT,
  a2_marca_otra TEXT,
  a2_donde_vio TEXT[],
  a2_mensaje TEXT[],
  a2_mensaje_otro TEXT,
  a2_atractivo INTEGER,
  a2_relevancia INTEGER,
  a2_calidad INTEGER,
  a2_intencion_compra INTEGER,
  a2_diferenciacion INTEGER,
  a2_visibilidad INTEGER,
  a2_medio_sugerido TEXT[],
  
  -- III. EVALUACION ANUNCIO 3
  a3_recuerda TEXT,
  a3_marca TEXT,
  a3_marca_otra TEXT,
  a3_donde_vio TEXT[],
  a3_mensaje TEXT[],
  a3_mensaje_otro TEXT,
  a3_atractivo INTEGER,
  a3_relevancia INTEGER,
  a3_calidad INTEGER,
  a3_intencion_compra INTEGER,
  a3_diferenciacion INTEGER,
  a3_visibilidad INTEGER,
  a3_medio_sugerido TEXT[],
  
  -- IV. EVALUACION DE MARCA
  p44_confianza_indeco INTEGER,
  p45_satisfaccion_indeco INTEGER
);

-- Enable RLS
ALTER TABLE public.survey_responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public survey)
CREATE POLICY "Anyone can submit survey responses"
ON public.survey_responses
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow authenticated users to read (for admin/export)
CREATE POLICY "Authenticated users can read responses"
ON public.survey_responses
FOR SELECT
TO authenticated
USING (true);
