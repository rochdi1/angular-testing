import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-collapsible-panel',
  template: ''
})

// tslint:disable-next-line:component-class-suffix
class CollapsiblePanel { }

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test',
  template: `
        <my-collapsible-panel></my-collapsible-panel>
  `
})

// tslint:disable-next-line:component-class-suffix
class NestedComponentTesting {}

describe('NestedComponentTesting', () => {
  describe('Mocking all nested components', () => {
    let component: NestedComponentTesting;
    let fixture: ComponentFixture<NestedComponentTesting>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [NestedComponentTesting, CollapsiblePanel]
      });
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NestedComponentTesting);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Ignoring nested components', () => {
    let component: NestedComponentTesting;
    let fixture: ComponentFixture<NestedComponentTesting>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [NestedComponentTesting],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      });
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NestedComponentTesting);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
