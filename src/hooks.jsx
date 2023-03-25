import React, {usesState} from "react"

function Hooks() {
    const [state, setState] = usesState(0);
    const Increase = () => {
        setState(state + 1);
    }
    const Decrease=()=>{
        setState(state - 1);
    }

    }
