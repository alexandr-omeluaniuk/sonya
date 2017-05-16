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
package ss.sonya.constants;

import java.util.concurrent.TimeUnit;

/**
 * Transport constants.
 * @author ss
 */
public final class TransportConst {
    /** Mock bus stop. */
    public static final String MOCK_BS = "mock";
    /** Specific route profile name, means subway. */
    public static final String METRO = "Metro";
    /** Transport midnight, for example 3:00. */
    public static final long TRANSPORT_MIDNIGHT = TimeUnit.HOURS.toMillis(3);
    /** Average human speed, km/h. */
    public static final double HUMAN_SPEED = 4;
    /** Transfer time payment. In hours. */
    public static final double TRANSFER_TIME_PAYMENT = 10 / 60;
    /**
     * Private constructor.
     */
    private TransportConst() {
    }
}
