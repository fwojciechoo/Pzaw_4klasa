import { useState, type SyntheticEvent } from 'react'

interface CharacterFormProps {
  nazwa_postaci: string;
  rasa_postaci: "Człowiek" | "Elf" | "Krasnolud" | "Ork" | "";
  klasa_postaci: "Wojownik" | "Mag" | "Łucznik" | "";
  poziom_postaci: number;
  opis_postaci: string;
  publiczna_postac: boolean;
}

interface CharacterCardProps {
  onSubmit: (data: CharacterFormProps) => void;
}

interface CharacterDisplayProps {
  character: CharacterFormProps;
}



function CharacterForm({ onSubmit }: CharacterCardProps
) {
  const [formData, setFormData] = useState<CharacterFormProps>({
    nazwa_postaci: "",
    rasa_postaci: "",
    klasa_postaci: "",
    poziom_postaci: 0,
    opis_postaci: "",
    publiczna_postac: false

  })

  const [errors, setErrors] = useState({} as Partial<Record<keyof CharacterFormProps, string>>);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setFormData(data => ({
      ...data, [name]: name === "publiczna_postac" ? (event.target as HTMLInputElement).checked : name === "poziom_postaci" ? parseInt(value) : value
    }))
  }

  function validateForm(formData: CharacterFormProps) {
    const errors: Partial<Record<keyof CharacterFormProps, string>> = {};


    //     console.log(formData.nazwa_postaci);
    // console.log(formData.nazwa_postaci.trim().length);


    if (formData.nazwa_postaci.trim().length < 3 || formData.nazwa_postaci.trim().length > 20) {
      errors.nazwa_postaci = "Nazwa postaci musi mieć od 3 do 20 znaków";
    }

    if (formData.klasa_postaci === "") {
      errors.klasa_postaci = "Wybierz klasę postaci";
    }

    if (formData.rasa_postaci === "") {
      errors.rasa_postaci = "Wybierz rasę postaci";
    }

    if (!Number.isInteger(formData.poziom_postaci) || (formData.poziom_postaci < 1 || formData.poziom_postaci > 100)) {
      errors.poziom_postaci = "Poziom postaci musi być liczbą całkowitą od 1 do 100";
    }

    if (formData.opis_postaci.trim().length > 200) {
      errors.opis_postaci = "Opis postaci nie może przekraczać 200 znaków";
    }

    return errors;

  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    console.log(formData.publiczna_postac);
    onSubmit(formData);
    console.log("wyslano formularz");
  }

  return (

      <form onSubmit={handleSubmit} className='form'>

        <div className="form-group">
          <label htmlFor="nazwa_postaci">Nazwa postaci:</label>
          <input className="form-control" id="nazwa_postaci" type="text" name="nazwa_postaci" onChange={handleChange} />

          {errors.nazwa_postaci && <p className="text-danger">{errors.nazwa_postaci}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="rasa_postaci"></label>
          <select className="form-control" name="rasa_postaci" id="rasa_postaci" defaultValue="" onChange={handleChange}>
            <option value="" disabled>Wybierz rasę postaci</option>
            <option value="Człowiek">Człowiek</option>
            <option value="Elf">Elf</option>
            <option value="Krasnolud">Krasnolud</option>
            <option value="Ork">Ork</option>
          </select>

          {errors.rasa_postaci && <p className="text-danger">{errors.rasa_postaci}</p>}
        </div>

        <div className="form-group">
          <select className="form-control" name="klasa_postaci" id="klasa_postaci" defaultValue="" onChange={handleChange}>
            <option value="" disabled>Wybierz klasę postaci</option>
            <option value="Wojownik">Wojownik</option>
            <option value="Mag">Mag</option>
            <option value="Łucznik">Łucznik</option>
          </select>

          {errors.klasa_postaci && <p className="text-danger">{errors.klasa_postaci}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="poziom_postaci">Podaj poziom postaci</label>
          <input className="form-control" id="poziom_postaci" name="poziom_postaci" type="number" onChange={handleChange} />

          {errors.poziom_postaci && <p className="text-danger">{errors.poziom_postaci}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="opis_postaci">Podaj opis postaci</label>
          <textarea name="opis_postaci" id="opis_postaci" onChange={handleChange}></textarea>

          {errors.opis_postaci && <p className="text-danger">{errors.opis_postaci}</p>}
        </div>

        <div className="form-group">
          <label className="form-check-label" htmlFor="publiczna_postac">Czy postać ma być publiczna</label>
          <input className="form-check-input" type="checkbox" name="publiczna_postac" id="publiczna_postac" onChange={handleChange} />
        </div>
        <button className="btn btn-primary" type="submit">Wyślij</button>
      </form>
  )
}

function CharacterDisplay({ character }: CharacterDisplayProps) {
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{character.nazwa_postaci}</h2>
        <p className='card-text'>{character.rasa_postaci}</p>
        <p className='card-text'>{character.klasa_postaci}</p>
        <p className='card-text'>Poziom: {character.poziom_postaci}</p>
        <p className='card-text'>{character.opis_postaci}</p>
        <p className='card-text'>{character.publiczna_postac ? "Publiczna" : "Prywatna"}</p>
      </div>
    </div>
  );
}

function App() {
  const [character, setCharacter] = useState<CharacterFormProps | null>(null);

  return (
    <>
      <CharacterForm onSubmit={setCharacter} />

      {character && <CharacterDisplay character={character} />}
    </>
  );
}

export default App
