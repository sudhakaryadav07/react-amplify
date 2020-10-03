import { Color } from '../constants/constant';

const header = {
    padding: 0,
    height: '8vh',
    backgroundColor: Color.blue,
    borderBottom: '0.5px solid #dadce0'
};

const title = {
    color: "white",
    fontSize: 22
};

const progressContainer = {
    height: '100vh',
    width: '100%',
    top: 0,
    left: 0,
    background: 'rgba(255,255,255,0.5)',
    position: 'absolute'
};

const progress = {
    top: '50%',
    color: '#348216',
    position: 'absolute',
    left: '50%'
};

const appbar = {
    boxShadow: "none"
};

const menuButton = {
    color: 'grey',
    marginRight: 2,
};

const dropDownMenu = {
    vertical: 'top',
    horizontal: 'right'
}

export { header, title, progressContainer, progress, appbar, menuButton, dropDownMenu };