import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPosts } from './user-posts';

describe('UserPosts', () => {
  let component: UserPosts;
  let fixture: ComponentFixture<UserPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
