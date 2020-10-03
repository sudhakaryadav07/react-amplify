import { Color } from '../constants/constant';

const header = {
    padding: 0,
    height: '9vh',
    backgroundColor: Color.blue
};

const body = {
    height: '91vh',
    overflow:"hidden" 
}

const bodyContext = {
    padding: 5
}

const title = {
    color: "white",
    fontSize: 22,
    padding: '0px 10px 0px 10px'
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

const dropDownMenu = {
    vertical: 'top',
    horizontal: 'right'
}

export { header, body,bodyContext, title, progressContainer, progress, appbar, dropDownMenu };