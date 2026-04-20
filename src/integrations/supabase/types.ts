export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      survey_responses: {
        Row: {
          a1_atractivo: number | null
          a1_calidad: number | null
          a1_diferenciacion: number | null
          a1_donde_vio: string[] | null
          a1_donde_vio_cod: string[] | null
          a1_intencion_compra: number | null
          a1_marca: string | null
          a1_marca_cod: string | null
          a1_marca_otra: string | null
          a1_medio_sugerido: string[] | null
          a1_medio_sugerido_cod: string[] | null
          a1_mensaje: string[] | null
          a1_mensaje_cod: string[] | null
          a1_mensaje_otro: string | null
          a1_recuerda: string | null
          a1_recuerda_cod: string | null
          a1_relevancia: number | null
          a1_visibilidad: number | null
          a2_atractivo: number | null
          a2_calidad: number | null
          a2_diferenciacion: number | null
          a2_donde_vio: string[] | null
          a2_donde_vio_cod: string[] | null
          a2_intencion_compra: number | null
          a2_marca: string | null
          a2_marca_cod: string | null
          a2_marca_otra: string | null
          a2_medio_sugerido: string[] | null
          a2_medio_sugerido_cod: string[] | null
          a2_mensaje: string[] | null
          a2_mensaje_cod: string[] | null
          a2_mensaje_otro: string | null
          a2_recuerda: string | null
          a2_recuerda_cod: string | null
          a2_relevancia: number | null
          a2_visibilidad: number | null
          a3_atractivo: number | null
          a3_calidad: number | null
          a3_diferenciacion: number | null
          a3_donde_vio: string[] | null
          a3_donde_vio_cod: string[] | null
          a3_intencion_compra: number | null
          a3_marca: string | null
          a3_marca_cod: string | null
          a3_marca_otra: string | null
          a3_medio_sugerido: string[] | null
          a3_medio_sugerido_cod: string[] | null
          a3_mensaje: string[] | null
          a3_mensaje_cod: string[] | null
          a3_mensaje_otro: string | null
          a3_recuerda: string | null
          a3_recuerda_cod: string | null
          a3_relevancia: number | null
          a3_visibilidad: number | null
          created_at: string
          cuota_edad_cod: string | null
          id: string
          p1_edad: number | null
          p1_marcas_conocidas_espontanea: string[] | null
          p1_marcas_conocidas_espontanea_cod: string[] | null
          p1_otras_especificar: string | null
          p10_recuerdo_indeco: string | null
          p10_recuerdo_indeco_cod: string | null
          p2_genero: string | null
          p2_genero_cod: string | null
          p2_otras_marcas_conocidas: string[] | null
          p2_otras_marcas_conocidas_cod: string[] | null
          p3_marcas_publicidad_vista: string[] | null
          p3_marcas_publicidad_vista_cod: string[] | null
          p3_profesion: string | null
          p3_profesion_cod: string | null
          p4_anos_profesion: string | null
          p4_anos_profesion_cod: string | null
          p4_marcas_conocidas_lista: string[] | null
          p4_marcas_conocidas_lista_cod: string[] | null
          p44_confianza_indeco: number | null
          p45_satisfaccion_indeco: number | null
          p5_marcas_usadas: string[] | null
          p5_marcas_usadas_cod: string[] | null
          p5_proyecto_activo: string | null
          p5_proyecto_activo_cod: string | null
          p6_marca_preferida: string | null
          p6_marca_preferida_cod: string | null
          p6_medio_movilizacion: string | null
          p6_medio_movilizacion_cod: string | null
          p7_punto_venta: string[] | null
          p7_punto_venta_cod: string[] | null
          p7_punto_venta_otro: string | null
          p7_usa_tubos_electricos: string | null
          p7_usa_tubos_electricos_cod: string | null
          p8_publicidad_marcas: string[] | null
          p8_publicidad_marcas_cod: string[] | null
          p8_ultima_compra: string | null
          p8_ultima_compra_cod: string | null
          p9_frecuencia_uso: string | null
          p9_frecuencia_uso_cod: string | null
          p9_medios_eurotubo: string[] | null
          p9_medios_eurotubo_cod: string[] | null
          p9_medios_indeco: string[] | null
          p9_medios_indeco_cod: string[] | null
          p9_medios_koplast: string[] | null
          p9_medios_koplast_cod: string[] | null
          p9_medios_matusita: string[] | null
          p9_medios_matusita_cod: string[] | null
          p9_medios_nicoll: string[] | null
          p9_medios_nicoll_cod: string[] | null
          p9_medios_pavco: string[] | null
          p9_medios_pavco_cod: string[] | null
          p9_medios_plastisur: string[] | null
          p9_medios_plastisur_cod: string[] | null
          p9_medios_tuboplast: string[] | null
          p9_medios_tuboplast_cod: string[] | null
          rotacion_orden: string | null
        }
        Insert: {
          a1_atractivo?: number | null
          a1_calidad?: number | null
          a1_diferenciacion?: number | null
          a1_donde_vio?: string[] | null
          a1_donde_vio_cod?: string[] | null
          a1_intencion_compra?: number | null
          a1_marca?: string | null
          a1_marca_cod?: string | null
          a1_marca_otra?: string | null
          a1_medio_sugerido?: string[] | null
          a1_medio_sugerido_cod?: string[] | null
          a1_mensaje?: string[] | null
          a1_mensaje_cod?: string[] | null
          a1_mensaje_otro?: string | null
          a1_recuerda?: string | null
          a1_recuerda_cod?: string | null
          a1_relevancia?: number | null
          a1_visibilidad?: number | null
          a2_atractivo?: number | null
          a2_calidad?: number | null
          a2_diferenciacion?: number | null
          a2_donde_vio?: string[] | null
          a2_donde_vio_cod?: string[] | null
          a2_intencion_compra?: number | null
          a2_marca?: string | null
          a2_marca_cod?: string | null
          a2_marca_otra?: string | null
          a2_medio_sugerido?: string[] | null
          a2_medio_sugerido_cod?: string[] | null
          a2_mensaje?: string[] | null
          a2_mensaje_cod?: string[] | null
          a2_mensaje_otro?: string | null
          a2_recuerda?: string | null
          a2_recuerda_cod?: string | null
          a2_relevancia?: number | null
          a2_visibilidad?: number | null
          a3_atractivo?: number | null
          a3_calidad?: number | null
          a3_diferenciacion?: number | null
          a3_donde_vio?: string[] | null
          a3_donde_vio_cod?: string[] | null
          a3_intencion_compra?: number | null
          a3_marca?: string | null
          a3_marca_cod?: string | null
          a3_marca_otra?: string | null
          a3_medio_sugerido?: string[] | null
          a3_medio_sugerido_cod?: string[] | null
          a3_mensaje?: string[] | null
          a3_mensaje_cod?: string[] | null
          a3_mensaje_otro?: string | null
          a3_recuerda?: string | null
          a3_recuerda_cod?: string | null
          a3_relevancia?: number | null
          a3_visibilidad?: number | null
          created_at?: string
          cuota_edad_cod?: string | null
          id?: string
          p1_edad?: number | null
          p1_marcas_conocidas_espontanea?: string[] | null
          p1_marcas_conocidas_espontanea_cod?: string[] | null
          p1_otras_especificar?: string | null
          p10_recuerdo_indeco?: string | null
          p10_recuerdo_indeco_cod?: string | null
          p2_genero?: string | null
          p2_genero_cod?: string | null
          p2_otras_marcas_conocidas?: string[] | null
          p2_otras_marcas_conocidas_cod?: string[] | null
          p3_marcas_publicidad_vista?: string[] | null
          p3_marcas_publicidad_vista_cod?: string[] | null
          p3_profesion?: string | null
          p3_profesion_cod?: string | null
          p4_anos_profesion?: string | null
          p4_anos_profesion_cod?: string | null
          p4_marcas_conocidas_lista?: string[] | null
          p4_marcas_conocidas_lista_cod?: string[] | null
          p44_confianza_indeco?: number | null
          p45_satisfaccion_indeco?: number | null
          p5_marcas_usadas?: string[] | null
          p5_marcas_usadas_cod?: string[] | null
          p5_proyecto_activo?: string | null
          p5_proyecto_activo_cod?: string | null
          p6_marca_preferida?: string | null
          p6_marca_preferida_cod?: string | null
          p6_medio_movilizacion?: string | null
          p6_medio_movilizacion_cod?: string | null
          p7_punto_venta?: string[] | null
          p7_punto_venta_cod?: string[] | null
          p7_punto_venta_otro?: string | null
          p7_usa_tubos_electricos?: string | null
          p7_usa_tubos_electricos_cod?: string | null
          p8_publicidad_marcas?: string[] | null
          p8_publicidad_marcas_cod?: string[] | null
          p8_ultima_compra?: string | null
          p8_ultima_compra_cod?: string | null
          p9_frecuencia_uso?: string | null
          p9_frecuencia_uso_cod?: string | null
          p9_medios_eurotubo?: string[] | null
          p9_medios_eurotubo_cod?: string[] | null
          p9_medios_indeco?: string[] | null
          p9_medios_indeco_cod?: string[] | null
          p9_medios_koplast?: string[] | null
          p9_medios_koplast_cod?: string[] | null
          p9_medios_matusita?: string[] | null
          p9_medios_matusita_cod?: string[] | null
          p9_medios_nicoll?: string[] | null
          p9_medios_nicoll_cod?: string[] | null
          p9_medios_pavco?: string[] | null
          p9_medios_pavco_cod?: string[] | null
          p9_medios_plastisur?: string[] | null
          p9_medios_plastisur_cod?: string[] | null
          p9_medios_tuboplast?: string[] | null
          p9_medios_tuboplast_cod?: string[] | null
          rotacion_orden?: string | null
        }
        Update: {
          a1_atractivo?: number | null
          a1_calidad?: number | null
          a1_diferenciacion?: number | null
          a1_donde_vio?: string[] | null
          a1_donde_vio_cod?: string[] | null
          a1_intencion_compra?: number | null
          a1_marca?: string | null
          a1_marca_cod?: string | null
          a1_marca_otra?: string | null
          a1_medio_sugerido?: string[] | null
          a1_medio_sugerido_cod?: string[] | null
          a1_mensaje?: string[] | null
          a1_mensaje_cod?: string[] | null
          a1_mensaje_otro?: string | null
          a1_recuerda?: string | null
          a1_recuerda_cod?: string | null
          a1_relevancia?: number | null
          a1_visibilidad?: number | null
          a2_atractivo?: number | null
          a2_calidad?: number | null
          a2_diferenciacion?: number | null
          a2_donde_vio?: string[] | null
          a2_donde_vio_cod?: string[] | null
          a2_intencion_compra?: number | null
          a2_marca?: string | null
          a2_marca_cod?: string | null
          a2_marca_otra?: string | null
          a2_medio_sugerido?: string[] | null
          a2_medio_sugerido_cod?: string[] | null
          a2_mensaje?: string[] | null
          a2_mensaje_cod?: string[] | null
          a2_mensaje_otro?: string | null
          a2_recuerda?: string | null
          a2_recuerda_cod?: string | null
          a2_relevancia?: number | null
          a2_visibilidad?: number | null
          a3_atractivo?: number | null
          a3_calidad?: number | null
          a3_diferenciacion?: number | null
          a3_donde_vio?: string[] | null
          a3_donde_vio_cod?: string[] | null
          a3_intencion_compra?: number | null
          a3_marca?: string | null
          a3_marca_cod?: string | null
          a3_marca_otra?: string | null
          a3_medio_sugerido?: string[] | null
          a3_medio_sugerido_cod?: string[] | null
          a3_mensaje?: string[] | null
          a3_mensaje_cod?: string[] | null
          a3_mensaje_otro?: string | null
          a3_recuerda?: string | null
          a3_recuerda_cod?: string | null
          a3_relevancia?: number | null
          a3_visibilidad?: number | null
          created_at?: string
          cuota_edad_cod?: string | null
          id?: string
          p1_edad?: number | null
          p1_marcas_conocidas_espontanea?: string[] | null
          p1_marcas_conocidas_espontanea_cod?: string[] | null
          p1_otras_especificar?: string | null
          p10_recuerdo_indeco?: string | null
          p10_recuerdo_indeco_cod?: string | null
          p2_genero?: string | null
          p2_genero_cod?: string | null
          p2_otras_marcas_conocidas?: string[] | null
          p2_otras_marcas_conocidas_cod?: string[] | null
          p3_marcas_publicidad_vista?: string[] | null
          p3_marcas_publicidad_vista_cod?: string[] | null
          p3_profesion?: string | null
          p3_profesion_cod?: string | null
          p4_anos_profesion?: string | null
          p4_anos_profesion_cod?: string | null
          p4_marcas_conocidas_lista?: string[] | null
          p4_marcas_conocidas_lista_cod?: string[] | null
          p44_confianza_indeco?: number | null
          p45_satisfaccion_indeco?: number | null
          p5_marcas_usadas?: string[] | null
          p5_marcas_usadas_cod?: string[] | null
          p5_proyecto_activo?: string | null
          p5_proyecto_activo_cod?: string | null
          p6_marca_preferida?: string | null
          p6_marca_preferida_cod?: string | null
          p6_medio_movilizacion?: string | null
          p6_medio_movilizacion_cod?: string | null
          p7_punto_venta?: string[] | null
          p7_punto_venta_cod?: string[] | null
          p7_punto_venta_otro?: string | null
          p7_usa_tubos_electricos?: string | null
          p7_usa_tubos_electricos_cod?: string | null
          p8_publicidad_marcas?: string[] | null
          p8_publicidad_marcas_cod?: string[] | null
          p8_ultima_compra?: string | null
          p8_ultima_compra_cod?: string | null
          p9_frecuencia_uso?: string | null
          p9_frecuencia_uso_cod?: string | null
          p9_medios_eurotubo?: string[] | null
          p9_medios_eurotubo_cod?: string[] | null
          p9_medios_indeco?: string[] | null
          p9_medios_indeco_cod?: string[] | null
          p9_medios_koplast?: string[] | null
          p9_medios_koplast_cod?: string[] | null
          p9_medios_matusita?: string[] | null
          p9_medios_matusita_cod?: string[] | null
          p9_medios_nicoll?: string[] | null
          p9_medios_nicoll_cod?: string[] | null
          p9_medios_pavco?: string[] | null
          p9_medios_pavco_cod?: string[] | null
          p9_medios_plastisur?: string[] | null
          p9_medios_plastisur_cod?: string[] | null
          p9_medios_tuboplast?: string[] | null
          p9_medios_tuboplast_cod?: string[] | null
          rotacion_orden?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
