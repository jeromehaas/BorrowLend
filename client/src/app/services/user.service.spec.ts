import { UserService } from './user.service';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USER } from '../testMocks/user';
import { USERS } from '../testMocks/users';
import { apiUrl } from '../services/apiUrl';
import { toBase64String } from '@angular/compiler/src/output/source_map';

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
		httpTestingController = TestBed.get(HttpTestingController);
		service = TestBed.get(UserService);
		mockUser = USER;
		mockUsers = USERS;
	});
	
	afterEach(() => {
		httpTestingController = null
		service = null;
		mockUser = null;
		mockUsers = null;
	});
	
	it('Should create user-service', () => {
	  expect(service).toBeTruthy();
	});
	
	it('Should get user by ID', () => {
		service.getUser('2')
			.subscribe(user => {
				expect(user).toEqual(mockUser);
			});
		const req = httpTestingController.expectOne('http://localhost:3000/users/username/2');
		expect(req.request.method).toEqual('GET');
		req.flush(mockUser);
	});

	it('Should get a list with all users', () => {
		service.getAllUsers()
			.subscribe(users => {
				console.log(users);
				expect(users).toEqual(mockUsers);
			});
		const req = httpTestingController.expectOne('http://localhost:3000/users');
		expect(req.request.method).toEqual('GET');
		req.flush(mockUsers);
	});





});

