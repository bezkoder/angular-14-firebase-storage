import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadListComponent } from './upload-list.component';

describe('UploadListComponent', () => {
  let component: UploadListComponent;
  let fixture: ComponentFixture<UploadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
