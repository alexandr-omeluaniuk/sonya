/*
 * Copyright (C) 2017 ss
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package ss.sonya.inject;

import org.springframework.security.core.userdetails.UserDetailsService;
import ss.sonya.constants.RegistrationStatus;
import ss.sonya.entity.UserProfile;

/**
 * Security service.
 * @author ss
 */
public interface SonyaSecurity extends UserDetailsService {
    /**
     * Create new user profile.
     * @param profile user profile.
     * @return registration status.
     */
    RegistrationStatus createProfile(UserProfile profile);
}
