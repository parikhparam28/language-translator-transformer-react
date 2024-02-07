const LANGUAGES = {
    "Acehnese (Arabic script)": "ace_Arab",
    "English": "eng_Latn",
    "Gujarati": "guj_Gujr",
    "Hindi": "hin_Deva",
  }
  
  export default function LanguageSelector({ type, onChange, defaultLanguage }) {
    return (
      <div className='language-selector'>
        <label>{type}: </label>
        <select onChange={onChange} defaultValue={defaultLanguage}>
          {Object.entries(LANGUAGES).map(([key, value]) => {
            return <option key={key} value={value}>{key}</option>
          })}
        </select>
      </div>
    )
  }