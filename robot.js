var state = {
    robotPosition: 0,
    mapSize: 5,
    icon: 'R'
    // icon；{
        //img:'xxxxx/x/x/x.jpg',
        //size:10;
    //}
}

var histories = [];

function availablePosition(newPosition, mapSize) {
    if (newPosition >= 0 && newPosition < mapSize) {
        return true;
    } else {
        return false;
    }
}

function move(newPosition) {
    if (availablePosition(newPosition, state.mapSize)) {
        var oldState = Object.assign({},state);
       // shallow var oldState = Object.assign({},state,{icon:object.assign({},state.icon)});
       // deep copy var oldState=JSON.parse(JSPON.stringify(state));
        histories.push(oldState);
        state.robotPosition = newPosition;
        //state.icon.size=0;
        render();
        return true;
    } else {
        return false;
    }
}

function render() {
    var mapCells = document.querySelectorAll('.map-cell');
    mapCells.forEach((aCell, index) => {
        if (index === state.robotPosition) {
            aCell.innerHTML = state.icon;
            //aCell.innerHTML='';
        } else {
            aCell.innerHTML = '';
        }
    })
}

function onCommandRight() {
    move(state.robotPosition + 1);
}

function onReverse() {
    state = histories.pop();
    render();
}

render();