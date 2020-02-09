import MainView from 'views/main';
import HistoryView from 'views/history';

type RoutesListType = Array<{ path: string, component: Object }>

const routes: RoutesListType = [
    { path: '/', component: MainView },
    { path: '/history', component: HistoryView },
];

export default routes;