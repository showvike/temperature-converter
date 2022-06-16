const unit = {
  c: "celcius",
  f: "fahrenheit",
  k: "kelvin"
};

function Input({ v, cfk, tC }) {
  return (
    <div className={unit[cfk]}>
      <input type="number" value={v} placeholder={unit[cfk]} onChange={(e) => tC(e, cfk)} />
    </div>
  );
}

export default Input;
