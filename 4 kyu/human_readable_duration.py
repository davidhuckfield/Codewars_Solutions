def format_duration(seconds):

    if seconds == 0:
        return "now"
    SECONDS_IN_YEAR = 365 * 24 * 60 * 60
    SECONDS_IN_DAY = 24 * 60 * 60
    SECONDS_IN_HOUR = 60 * 60
    SECONDS_IN_MINUTE = 60

    years = seconds // SECONDS_IN_YEAR
    remaining_seconds = seconds % SECONDS_IN_YEAR

    days = remaining_seconds // SECONDS_IN_DAY
    remaining_seconds %= SECONDS_IN_DAY

    hours = remaining_seconds // SECONDS_IN_HOUR
    remaining_seconds %= SECONDS_IN_HOUR

    minutes = remaining_seconds // SECONDS_IN_MINUTE
    remaining_seconds %= SECONDS_IN_MINUTE

    seconds = remaining_seconds

    components = [
        f"{years} year{'s' if years != 1 else ''}" if years else "",
        f"{days} day{'s' if days != 1 else ''}" if days else "",
        f"{hours} hour{'s' if hours != 1 else ''}" if hours else "",
        f"{minutes} minute{'s' if minutes != 1 else ''}" if minutes else "",
        f"{seconds} second{'s' if seconds != 1 else ''}" if seconds else "",
    ]

    components = [comp for comp in components if comp]

    if len(components) > 1:
        return ", ".join(components[:-1]) + " and " + components[-1]
    elif components:
        return components[0]
    else:
        return ""

test_inputs = [0,1,62,120,3600,3662,15731080,132030240,205851834,253374061,242062374,101956166,33243586]
for test_num in test_inputs:
    print(format_duration(test_num))

