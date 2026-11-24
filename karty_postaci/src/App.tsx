import { useState, type SyntheticEvent } from 'react'

interface CharacterFormProps {
  nazwa_postaci: string;
  rasa_postaci: "Człowiek" | "Elf" | "Krasnolud" | "Ork" | "";
  klasa_postaci: "Wojownik" | "Mag" | "Łucznik" | "";
  poziom_postaci: number;
  opis_postaci: string;
  publiczna_postac: boolean;
}

function CharacterForm(){
  const [formData, setFormData] = useState<CharacterFormProps>({
    nazwa_postaci: "",
    rasa_postaci: "",
    klasa_postaci: "",
    poziom_postaci: 0,
    opis_postaci: "",
    publiczna_postac: false

  })
  const [errors, setErrors] = useState({});

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
    const {name, value} = event.target;

    setFormData(data => ({
      ...data, [name]: value
    }))
  }

  function validateForm(formData: CharacterFormProps){
    const errors: Partial<Record<keyof FormData, string>> = {};

    //dodac warunki
  }

  function handleSubmit(event: SyntheticEvent){
    event.preventDefault();

    console.log("wyslano formularz");
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="nazwa_postaci">Nazwa postaci:</label>
        <input id="nazwa_postaci" type="text" onChange = {handleChange}/>

        <label htmlFor="rasa_postaci"></label>
        <select name="rasa_postaci" id="rasa_postaci" onChange = {handleChange}>
          <option value="" disabled>Wybierz rasę postaci</option>
          <option value="Człowiek">Człowiek</option>
          <option value="Elf">Elf</option>
          <option value="Krasnolud">Krasnolud</option>
          <option value="Ork">Ork</option>
        </select>

        <label htmlFor="klasa_postaci"></label>
        <select name="klasa_postaci" id="klasa_postaci" onChange = {handleChange}>
          <option value="" disabled>Wybierz klasę postaci</option>
          <option value="Wojownik">Wojownik</option>
          <option value="Mag">Mag</option>
          <option value="Łucznik">Łucznik</option>
        </select>

        <label htmlFor="poziom_postaci">Podaj poziom postaci</label>
        <input type="number" onChange = {handleChange}/>

        <label htmlFor="opis_postaci">Podaj opis postaci</label>
        <textarea name="opis_postaci" id="opis_postaci" onChange = {handleChange}></textarea>

        <label htmlFor="publiczna_postac">Czy postać ma być publiczna</label>
        <input type="checkbox" id="publiczna_postac"onChange = {handleChange}/>
        
        <button type="submit">Wyślij</button>
    </form>
  )
}

function App() {

  return (
   <CharacterForm></CharacterForm>
  )
}

export default App
