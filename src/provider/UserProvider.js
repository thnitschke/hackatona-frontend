import React from 'react';
import PropTypes from 'prop-types'
 
const ThemeContext = React.createContext({
    tipoUsuario: '1',
    atualizarUsuario: () => {},
});
 
export default ThemeContext;