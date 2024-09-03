import { useState } from "react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "../RotaPersonalizada/rotaPersonalizadaStyle";
import { useForm, useFieldArray } from "react-hook-form";


export default function RotaPersonalizada() {

   const [valorTotal, setValorTotal] = useState(0);

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      partida:'',
      destino:''
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'inputs',
  });

  const onSubmit = (data) => {
    const partida = 50;
    const paradas = 50 * data.inputs.length;
    const destino = 50;

    const valorTotal = partida + paradas + destino;
    setValorTotal(valorTotal)
    console.log(valorTotal);
  };


  return (
    <>
      <Menu />
      <Container>
        <section className="blocos">
          <div className="blocoleft">
            <div className="titulo">
              <h1>Olá Turista, personalize sua rota:</h1>
            </div>
           <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('partida')} placeholder={'Partida'} />
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(`inputs.${index}.value`)}
            placeholder={`Input ${index + 1}`}
            
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <input {...register('destino')} placeholder={'Destino'} />
      <button type="button" onClick={() => append({ value: '' })}>
        +
      </button>
      <button type="submit">Submit</button>
    </form>
          </div>
        </section>
        {valorTotal}
      </Container>
      <Footer />
    </>
  );
}



