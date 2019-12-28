import SparseGraph from "./SparseGraph";
import DenseGraph from "./DenseGraph";

type Graph<Weight> = SparseGraph<Weight> | DenseGraph<Weight>

export default Graph
