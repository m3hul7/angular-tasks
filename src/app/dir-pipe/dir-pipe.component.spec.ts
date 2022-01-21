import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirPipeComponent } from './dir-pipe.component';

describe('DirPipeComponent', () => {
  let component: DirPipeComponent;
  let fixture: ComponentFixture<DirPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
