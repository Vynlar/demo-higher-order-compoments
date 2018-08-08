import React from 'react';

//Button.js

const Button = ({ text, theme }) => {
  return (
    <div style={{ background: theme.background, color: theme.color }}>
        {text}
    </div>
  );
};

//ThemeProvider.js

// HOC
const withTheme = (Component) => {

  const darkTheme = {
    background: 'black', color: 'white' 
  }
  const lightTheme = {
    background: 'white', color: 'black' 
  }

  function getThemeFromServer() {
    // some server stuff
    return Math.random() < 0.5 ? lightTheme : darkTheme;
  }

  return (props) => {
    return (
      <Component theme={getThemeFromServer()} {...props} />
    )
  }
}

export default withTheme(Button);
