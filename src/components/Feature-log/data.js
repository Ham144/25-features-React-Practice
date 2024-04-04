function ShowFlagsDataResponse() {
    const FlagsDataResponse = {
        showRandomGenerator: true,
        showAccordion: true,
        showTreeViewMenu: true,
        showTicTacToe: true,
    };
    function ChangeFlagsDataResponse() { }
    return new Promise((resolve, reject) => {
        if (FlagsDataResponse)
            setTimeout(resolve(FlagsDataResponse), 500);
        else {
            reject("Something gone wrong");
        }
    });
}
export default ShowFlagsDataResponse;
