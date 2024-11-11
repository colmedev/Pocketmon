export type LinkItem = {
  /*
   * Texto del elemento
   */
  text?: string;

  /*
   * URL del elemento
   */
  url: string;

  /*
   * Etiqueta del elemento
   */
  label?: string;
};

export type LinkItemIcon = LinkItem & {
  /*
   * Icono del elemento
   */
  icon: string;
};
