// bit.ly/s-pcs
var possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount ; i++ ) {
      var combinationSum = 0;
      for (var j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
  };
  
  const Star = (props) => {
    // let stars = [];
    // for(let i=0; i<numberOfStars; i++) {
    // 	stars.push(<i className="fa fa-star"></i> );
    // }
    return (
      <div className="col-5">
        {_.range(props.numberOfStars).map(i => 
            <i className="fa fa-star"></i>
        )}
      </div>
    )
  }
  
  const Button = (props) => {
      let button;
      switch(props.answerIsCorrect) {
        case true:
          button = 
            <button className="btn btn-success" onClick={props.acceptAnswer}>
            <i className="fa fa-check"/>
          </button>
          break;
      case false:
          button = 
            <button className="btn btn-danger">
            <i className="fa fa-times"/>
          </button>
          break;
      default:
          button = 
          <button className="btn" 
                  disabled={props.selectedNumbers.length === 0}
                  onClick={props.checkAnswer}>
            =
          </button>
    }
    return (
      <div className="col-2 text-center">
        {button}
        <br/><br/>
        <button className="btn btn-warning btn-sm" onClick={props.refresh}
                disabled={props.refreshCount === 0}>
          <i className="fa fa-refresh"/> {props.refreshCount}
        </button>
      </div>
    )
  }
  
  const Answer = (props) => {
    return (
      <div className="col-5">
        {props.selectedNumbers.map((number, i) =>
            <span key={i} onClick={() => props.deSelectNumber(number)}> 
            {number} 
          </span>
        )}
      </div>
    )
  }
  
  const Numbers = (props) => {
      const numberClassName = (number) => {
        if(props.selectedNumbers.indexOf(number) != -1) {
            return 'selected';
      }
      if(props.usedNumbers.indexOf(number) != -1) {
          return 'used';
      }
    }
      return (
        <div className="card text-center">
        <div>
          {Numbers.list.map((number, i) => 
              <span key={i} className={numberClassName(number)} 
                  onClick={() => props.selectNumber(number)}>
              {number}
            </span>
          )}
        </div>
      </div>
    )
  }
  Numbers.list = _.range(1, 10);
  
  const DoneFrame = (props) => {
      return (
        <div className="text-center">
        <h2>{props.doneStatus}</h2>
        <button className="btn btn-seconday" onClick={props.resetGame}>
          Play Again
        </button>
      </div>
    )
  }
  
  class Game extends React.Component {
      static randomNumber = () => 1 + (Math.floor(Math.random() * 9));
    static initialState = () => ({
        selectedNumbers: [],
      numberOfStars: Game.randomNumber(),
      usedNumbers: [],
      answerIsCorrect: null,
      refreshCount: 5,
      doneStatus: null
    });
    
      state = Game.initialState();
    resetGame = () => this.setState(Game.initialState());
    
    selectNumber = (clickedNumber)=> {
        if(this.state.selectedNumbers.indexOf(clickedNumber) != -1 || this.state.usedNumbers.indexOf(clickedNumber) != -1) {
          return;
      }
        this.setState(prevState => ({
          answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };
    deSelectNumber = (clickedNumber) => {
        this.setState(prevState => ({
          answerIsCorrect: null,
          selectedNumbers: prevState.selectedNumbers.filter(number => number != clickedNumber)
      }))
    };
    checkAnswer = () => {
        this.setState(prevState => ({
          answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, val) => acc+val, 0)
      }));
    };
    acceptAnswer = () => {
        this.setState(prevState => ({
          usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
          numberOfStars: Game.randomNumber(),
          selectedNumbers: [],
        answerIsCorrect: null
      }), this.updateGameStatus);
    };
    refresh = () => {
        if(this.state.refreshCount == 0) {
          return;
      }
        this.setState(prevState => ({
          numberOfStars: Game.randomNumber(),
        selectedNumbers: [],
        answerIsCorrect: null,
        refreshCount: prevState.refreshCount - 1
      }), this.updateGameStatus);
    };
    possibleSolutions = ({numberOfStars, usedNumbers}) => {
        const possibleNumbers = _.range(1, 10).filter(number =>
          usedNumbers.indexOf(number) === -1
      );
      
      return possibleCombinationSum(possibleNumbers, numberOfStars);
    };
    updateGameStatus = () => {
        this.setState(prevState => {
          if(prevState.usedNumbers.length === 9) {
            return {doneStatus: "Done. Nice!"};
        }
        if(prevState.refreshCount === 0 && !this.possibleSolutions(prevState)) {
            return {doneStatus: "Game Over!"};
        }
      });
    };
    
      render() {
        const {numberOfStars, selectedNumbers, answerIsCorrect, usedNumbers, refreshCount, doneStatus} = this.state;
        return (
            <div>
          <h3> Play Nice </h3>
          <hr/>
          <div className="row">
            <Star numberOfStars={numberOfStars}/>
            <Button selectedNumbers={selectedNumbers}
                    answerIsCorrect={answerIsCorrect}
                    checkAnswer={this.checkAnswer}
                    acceptAnswer={this.acceptAnswer}
                    refresh={this.refresh}
                    refreshCount={refreshCount}/>
            <Answer selectedNumbers={selectedNumbers}
                    deSelectNumber={this.deSelectNumber}/>
          </div>
          <br/>
          
          {doneStatus?
                    <DoneFrame doneStatus={doneStatus}
                            resetGame={this.resetGame}/> :
                     <Numbers selectedNumbers={selectedNumbers}
                    usedNumbers={usedNumbers}
                    selectNumber={this.selectNumber}/>		   
                  }
        </div>
      )
    }
  }
  
  ReactDOM.render(<Game />, mountNode);