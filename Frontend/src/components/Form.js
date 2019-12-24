import React from "react";

const Form = (props) => {
    const {myKey:keys,empData:data} = props;
  return (
    <div className="from-block">
      <form className="form" onSubmit={event => props.submitHandler(event)}>
        {keys.map(name => {
          return (
            <div>
              {name}:
              <input
                type="text"
                name={name}
                defaultValue={data[name]}
                onChange={e => {
                  props.changeHandler(e);
                }}
              required />
            </div>
          );
        })}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
