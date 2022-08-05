import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDetailsComponent } from './upload-details.component';

describe('UploadDetailsComponent', () => {
  let component: UploadDetailsComponent;
  let fixture: ComponentFixture<UploadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
