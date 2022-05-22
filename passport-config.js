const LocalStrategy = require('passport-local').Strategy;

function initialize(passport, users) {
	const authenticateUser = (usernameLogin, passwordLogin, done) => {
		if (usernameLogin === 'admin' && passwordLogin === 'admin') {
			return done(null, users[0]);
		} else {
			return done(null, false, {
				message: 'Nazwa użytkownika lub hasło nieprawidłowe',
			});
		}
	};

	passport.use(
		new LocalStrategy(
			{ usernameField: 'usernameLogin', passwordField: 'passwordLogin' },
			authenticateUser
		)
	);
	passport.serializeUser((user, done) => done(null, user.id));
	passport.deserializeUser((id, done) => {
		return done(null, users[0]);
	});
}

module.exports = initialize;
