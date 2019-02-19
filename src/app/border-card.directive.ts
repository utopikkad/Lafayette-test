import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[formBorderCard]' 
})
export class BorderCardDirective {

    private initialColor: string = '#f5f5f5';
    private defaultcolor: string = '#9370DB';
    private defaultHeight: number = 360;

	constructor(private el: ElementRef) {
		this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
        
    }
    
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.defaultcolor);
    }

    @HostListener('mouseleave') onMouseleave() {
        this.setBorder(this.initialColor);
    }

	private setBorder(color: string) {
		let border = 'solid 4px ' + color;
		this.el.nativeElement.style.border = border;
	}

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
    }   
}