const root = document.getElementById("root");

const unit = {
  c: "celcius",
  f: "fahrenheit",
  k:"kelvin"
};

function rounded(temp) {
  return Math.round(temp * 1000) / 1000;
}

function cToFK(c) {
  const f = rounded((c * (9 / 5)) + 32);
  const k = rounded(c + 273.15);

  return  { f, k, c };
}

function fToKC(f) {
  const k = rounded(((f - 32) * (5 / 9)) + 273.15);
  const c = rounded(k - 273.15);

  return { k, c, f };
}

function kToCF(k) {
  const c = rounded(k - 273.15);
  const f = rounded((c * (9 / 5)) + 32);

  return { c, f, k };
}

function converter(temp, func) {
  const input = parseFloat(temp);
  
  let c = "", f = "", k = "";

  if (Number.isNaN(input)) return { c, f, k };

  ({ c, f, k } = func(input));

  c = c.toString();
  f = f.toString();
  k = k.toString();

  return { c, f, k };
}

class Temperature extends React.Component {
  state = { temp: "", change: "c" };

  tempChange = (e, cfk) => {
    this.setState({
      temp: e.target.value,
      change: cfk
    });
  }

  render() {
    const { temp, change } = this.state;

    let cfk;

    if (change === "c") {
      cfk = converter(temp, cToFK);
    } else if (change === "f") {
      cfk = converter(temp, fToKC);
    } else if (change === "k") {
      cfk = converter(temp, kToCF);
    }

    const { c, f, k } = cfk;

    return (
      <div>
        <Input v={c} cfk="c" tC={this.tempChange} />
        <Input v={f} cfk="f" tC={this.tempChange} />
        <Input v={k} cfk="k" tC={this.tempChange} />
      </div>
    );
  }
}

function Input({ v, cfk, tC }) {
  return (
    <div className={unit[cfk]}>
      <input type="number" value={v} placeholder={unit[cfk]} onChange={(e) => tC(e, cfk)} />
    </div>
  );
}

ReactDOM.render(<Temperature />, root);
