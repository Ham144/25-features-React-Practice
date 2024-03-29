const DummyApiResponse = {
	ShowTicTacToe: false,
	showRandomColorGenerator: true,
	showAccordion: false,
	showTreeViewMenu: true,
};

function featureFlagsDataServiceCall() {
	return new Promise((resolve, reject) => {
		if (DummyApiResponse) setTimeout(resolve(DummyApiResponse), 500);
		else reject("somthing gone wrong");
	});
}

export default featureFlagsDataServiceCall;
