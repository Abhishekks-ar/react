import EditEmployee from "./EditEmployee";
import Employees from "../Pages/Employees";

function Employee(props) {
  //props.name = "something";
  return (
    <div class="min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        class="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
        alt="Woman's Face"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">{props.name}</p>
          <p class="text-slate-500 font-medium">{props.role}</p>
        </div>
        {props.editEmployee}
      </div>
    </div>
  );
}

export default Employee;
