import { config } from '../../config';

const translations: { [key: string]: { [key: string]: string } } = {
  es: {
    'layout.title': 'Gestión de Torneos Billar',
    'page.not.found': 'La página que buscas no existe',
    'leagues.title': 'Ligas',
    'leagues.form.create': 'Crear Liga',
    'leagues.form.creating': 'Creando tu liga...',
    'leagues.form.created': 'La Liga ha sido creada.',
    'leagues.league.noleagues': 'No hay ligas creadas',
    'leagues.league.player': 'Jugador',
    'leagues.league.victories': 'V',
    'leagues.league.losses': 'D',
    'leagues.league.percent': '%',
    'leagues.select.option.default': 'Selecciona el tipo de liga',
    'leagues.select.option.bola8': 'Bola 8',
    'leagues.create.resume.p1': 'Estás apunto de crear la liga',
    'leagues.create.next': 'Siguiente',
    'leagues.create.previous': 'Anterior',
    'leagues.create.button': 'Crear',
    'leagues.create.error': 'Tienes que seleccionar nombre y tipo de liga',
    'leagues.create.resume.p2': 'del tipo ',
  },
};
export const trans = (
  item: string,
  language = config.language || 'es'
): string => {
  return translations[language][item];
};
