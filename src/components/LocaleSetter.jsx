import LocaleContext from "../contexts/LocaleContext";
import {useContext, useReducer} from "react";

export default function LocaleSetter() {

  // const [state, dispatch] = useReducer(reducer, {language: 'en-us'});
  const {language, setLanguage} = useContext(LocaleContext);

  return (
   <div className='LanguageSetter'>
     <select name="language"
             id="language"
             value={language}
             onChange={event => setLanguage(event.target.value)}>
       <option value="en-us">US</option>
       <option value="en-gb">GB</option>
       <option value="de-de">DE</option>
     </select>
   </div>
  )
}