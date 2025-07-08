import { faker } from '@faker-js/faker'

export const inputs = {
email: faker.internet.exampleEmail(),
name: faker.person.fullName(),
fname: faker.person.firstName(),
lname: faker.person.lastName(),
address: faker.location.streetAddress(),
company: faker.company.name(),
address2: faker.location.secondaryAddress(),
state: faker.location.state(),
city: faker.location.city(),
zipcode: faker.location.zipCode(),
mobile: faker.phone.number(),
}