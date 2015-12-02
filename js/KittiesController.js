(function() {
  'use strict';

  angular
      .module("CatApp")
      .controller("CatsController", CatsController);

  CatsController.$inject = [];

  function CatsController() {
    var vm = this;
    vm.remove = remove;
    vm.addNewCat = addNewCat;
    vm.newCat = {
    					catName: '',
    					monthsOld: 0,
    					gender: '',
    					image: "images/princessmew.png",
    					adopted: false
    };

		vm.allCats = [
				{
					catName: 'Karl',
					monthsOld: 5,
					gender: 'boy',
					image: "images/carl.png",
					adopted: true,
				},
				{
					catName: 'Jack',
					monthsOld: 4,
					gender: 'boy',
					image: "images/jack.png",
					adopted: false
				},
				{
					catName: 'Oscar',
					monthsOld: 2,
					gender: 'boy',
					image: "images/oscar.png",
					adopted: false
				},
				{
					catName: 'Princess Mew',
					monthsOld: 3,
					gender: 'girl',
					image: "images/princessmew.png",
					adopted: false
				}

			]; //all cats

	// filter iterate through each element and remove false expression
    function remove(removeCat) {
      vm.allCats = vm.allCats.filter(function(cat) {
        return cat.catName != removeCat.catName;
      });
    };

    function addNewCat() {
      vm.allCats.push({
					catName: vm.newCat.catName,
					monthsOld: vm.newCat.monthsOld,
					gender: vm.newCat.gender,
					image: vm.newCat.image,
					adopted: vm.newCat.adopted
      });
      alert('you added a new cat!');
    };

  }
})();

