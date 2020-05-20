import { connect } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

// storeの現在の状態を引数として受け取って必要なものだけをpropsに流しているだけです。
// propsはobjectなので返り値もobjectです。少しとり
const mapStateProps = ({ count }) => ({ count });


// 引数にdispatchを受け取って、必要なactionだけをdispatchする関数を定義して
// propsとして渡しています
const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
});

// コネクトの引数
// mapStatePropsという関数で、これはstoreからどのstateを引っ張ってくるか定義する。
// mapDispatchPropsという関数で、どんなdispatdcherをpropsに渡すかを定義します。
// ラップしたいコンポーネントを関数に渡しています。
// この記法をHOC(Hight Order Component)と呼ばれコンポーネントを返す関数になっています。
// (カリー化されている)

export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter);
