import { UserService } from './user.service';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USER } from '../testMocks/user';
import { USERS } from '../testMocks/users';
import { apiUrl } from '../services/apiUrl';

fdescribe('CoursesService', () => {
	let httpTestingController: HttpTestingController;
	let service: UserService;
	let mockUser: any;
	let mockUsers: any;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [UserService]
		});
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(UserService);
		mockUser = USER;
		mockUsers = USERS;
	});

	afterEach(() => {
		httpTestingController = null
		service = null;
		mockUser = null;
		mockUsers = null;
	});

	it('The user-service must be created', () => {
    expect(service).toBeTruthy();
	});

	it('The first user in the DB should be "Alba"', () => {
		service.getAllUsers().subscribe((users) => {
			expect(users[0][0].username).toEqual('Alba');
			expect(users[0]).toEqual(mockUser);
		});
		const request = httpTestingController.expectOne(`${apiUrl}/users`);
		request.flush([mockUser]);
		httpTestingController.verify();
	});

	it('Should get "Albe" by ID', () => {
		service.getUserById(2).subscribe((user) => {
			console.log(user[0][0]);
			expect(user[0][0].username).toEqual('Alba');
		});
		const request = httpTestingController.expectOne(`${apiUrl}/users/2`);
		request.flush([mockUser]);
		httpTestingController.verify();
	});


});

