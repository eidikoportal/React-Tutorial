/*
single default export can be used per file and multiple export with name can be used in a file
*/
export const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  };
  
export const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  };

  export const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };
  export const BoilingVerdict = (props) =>{
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
      }
      return <p>The water would not boil.</p>;
  }
  export const Dialog = (props)=>{
    return (
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            {props.title}
          </h1>
          <p className="Dialog-message">
            {props.message}
          </p>
          {props.children}
        </FancyBorder>
      );
  }
  export const FancyBorder =(props)=>{
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      );
  }