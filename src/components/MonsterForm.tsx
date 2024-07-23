import Button from "./Button";
import Input from "./Input";

import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from 'react-redux'; 
import { chooseName, chooseHeight, chooseWeight, chooseType } from "../redux/slices/RootSlice";

interface MonsterFormProps {
  id?: string[];
}

const MonsterForm = (props: MonsterFormProps) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    console.log(props.id)
    console.log(data);

    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseHeight(data.height));
      dispatch(chooseWeight(data.weight));
      dispatch(chooseType(data.type));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  };
  
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-5" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <Input {...register('name')} name="name" placeholder="Name"/>
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <Input {...register('height')} name="height" placeholder="Height"/>
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <Input {...register('weight')} name="weight" placeholder="Weight"/>
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <Input {...register('type')} name="type" placeholder="Type"/>
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-1 bg-red-400 p-2 rounded hover:bg-black text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MonsterForm