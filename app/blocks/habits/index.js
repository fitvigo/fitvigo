import $ from 'jquery';

class Habits {
	constructor() {
		this.selectors = {
			habit: '.habits__habit',
			text: '.habits__text',
			desc: '.habits__habit-desc',
			whiteScreen: '.habits__white-screen'
		};

		this.classes = {
			habitActive: 'habits__habit_active',
			habitInactive: 'habits__habit_inactive',
			textActive: 'habits__text_active',
			descActive: 'habits__habit-desc_active',
			whiteScreenVisible: 'habits__white-screen_visible'
		};

		$(this.selectors.habit).on('click', this.selectHabit.bind(this));
		$(document.body).click(this.resetHabit.bind(this))
	}

	resetHabit() {
		$(this.selectors.habit)
			.removeClass(this.classes.habitActive)
			.removeClass(this.classes.habitInactive);

		$(this.selectors.text).removeClass(this.classes.textActive)
		$(this.selectors.text).eq(0).addClass(this.classes.textActive)
		$(this.selectors.desc).removeClass(this.classes.descActive)
		$(this.selectors.whiteScreen).removeClass(this.classes.whiteScreenVisible);
	}

	selectHabit(e) {
		e.stopPropagation();
		const $this = $(e.currentTarget);
		const habit = $this.attr('data-habit');

		$(this.selectors.habit).not($this)
			.removeClass(this.classes.habitActive)
			.addClass(this.classes.habitInactive);

		$this
			.removeClass(this.classes.habitInactive)
			.addClass(this.classes.habitActive);

		$(this.selectors.text).removeClass(this.classes.textActive)
		$(this.selectors.desc).removeClass(this.classes.descActive)
		const currentText = '.habits__text_h' + habit;
		const currentDesc = '.habits__habit-desc_h' + habit;
		$(currentText).addClass(this.classes.textActive);
		$(currentDesc).addClass(this.classes.descActive);
		$(this.selectors.whiteScreen).addClass(this.classes.whiteScreenVisible);
	}
}

export default Habits;
