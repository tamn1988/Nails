import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
	constructor(el, offset){
		this.itemsToReveal = el;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();

	}

	hideInitially(){
		for (var i = 0; i < this.itemsToReveal.length; i++){
			this.itemsToReveal[i].classList.add('reveal-item');
		}
	}

	createWaypoints(){
		var that = this;
		console.log(that.offsetPercentage)
		for (let i = 0; i < this.itemsToReveal.length; i++){
			let currentItem = this.itemsToReveal[i];
			new Waypoint({
				element: currentItem,
				handler: function(){
					currentItem.classList.add('reveal-item--is-visible');
				},
				offset: that.offsetPercentage
			});
		};
	}
}


export default RevealOnScroll;