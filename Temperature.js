import {
  converter, cToFK, fToKC, kToCF
} from "./converter";
import Input from "./Input";

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

export default Temperature;
