/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AiPrompterComponent } from './ai-prompter.component';

describe('AiPrompterComponent', () => {
    let component: AiPrompterComponent;
    let fixture: ComponentFixture<AiPrompterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AiPrompterComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AiPrompterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
