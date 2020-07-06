import { component } from 'riot';
import MainApp from './main-app.riot';

document.addEventListener('DOMContentLoaded', () => {
  component(MainApp)(document.querySelector('main-app') || document.body);
});
