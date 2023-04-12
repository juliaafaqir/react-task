import Style from './Form.module.css'

const AdvancedForm = () => {
    return (
      <form className={Style.myForm} autoComplete="off">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Enter your username" />
      </form>
    );
  };
  export default AdvancedForm;