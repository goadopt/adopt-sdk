import { Base } from "./base";
import { Disclaimer } from "./disclaimer";
import { applyMixins } from "./utils";

class Typicode extends Base {}
interface Typicode extends Disclaimer {}

applyMixins(Typicode, [Disclaimer]);

export default Typicode;
