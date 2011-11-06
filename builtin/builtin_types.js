
mf._serializableTypeNames = [];

mf._serializableTypeNames.push("Point");
mf.Point = function(x, y, z) {
    this._type = "Point";
    this.x = x;
    this.y = y;
    this.z = z;
};
mf.Point.prototype.floored = function() {
    return new mf.Point(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z));
};
/** returns a new point offset by the amount specified */
mf.Point.prototype.offset = function(dx, dy, dz) {
    return new mf.Point(this.x + dx, this.y + dy, this.z + dz);
};
/** returns a new point */
mf.Point.prototype.plus = function(other) {
    return this.offset(other.x, other.y, other.z);
};
mf.Point.prototype.minus = function(other) {
    return this.offset(-other.x, -other.y, -other.z);
};
mf.Point.prototype.scaled = function(scalar) {
    return new mf.Point(this.x * scalar, this.y * scalar, this.z * scalar);
};
mf.Point.prototype.abs = function() {
    return new mf.Point(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
};
mf.Point.prototype.min = function(other) {
    return new mf.Point(Math.min(this.x, other.x), Math.min(this.y, other.y), Math.min(this.z, other.z));
};
mf.Point.prototype.max = function(other) {
    return new mf.Point(Math.max(this.x, other.x), Math.max(this.y, other.y), Math.max(this.z, other.z));
};
/** euclidean distance */
mf.Point.prototype.distanceTo = function(other) {
    var dx = other.x - this.x;
    var dy = other.y - this.y;
    var dz = other.z - this.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
};
mf.Point.prototype.equals = function(other) {
    return this.x === other.x && this.y === other.y && this.z === other.z;
};
mf.Point.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};
mf.Point.prototype.clone = function() {
    return this.offset(0, 0, 0);
};

mf.Entity = function() {
};
mf.Entity.prototype.equals = function(other) {
    return this.entity_id === other.entity_id;
};

mf.EntityType = {
    "Player": 1,
    "Mob": 3,
    "Pickup": 4,
};

mf._serializableTypeNames.push("Item");
mf.Item = function(type, count, metadata) {
    this._type = "Item";
    this.type = type;
    this.count = count !== undefined ? count : 1;
    this.metadata = metadata !== undefined ? metadata : 0;
};

mf._serializableTypeNames.push("Block");
mf.Block = function(type, metadata, light, sky_light) {
    this._type = "Block";
    this.type = type;
    this.metadata = metadata !== undefined ? metadata : 0;
    this.light = light !== undefined ? light : 0;
    this.sky_light = sky_light !== undefined ? sky_light : 0;
};
mf.Block.prototype.equals = function(other) {
    // ignore light levels
    return this.type === other.type && this.metadata === other.metadata;
};

mf._serializableTypeNames.push("HealthStatus");
mf.HealthStatus = function(health, food, food_saturation) {
    this._type = "HealthStatus";
    this.health = health;
    this.food = food;
    this.food_saturation = food_saturation;
};
mf.HealthStatus.prototype.equals = function(other) {
    return this.health === other.health && this.food === other.food && this.food_saturation === other.food_saturation;
};

mf._serializableTypeNames.push("StatusEffect");
mf.StatusEffect = function(effect_id, amplifier, start_timestamp, duration_milliseconds) {
    this._type = "StatusEffect";
    this.effect_id = effect_id;
    this.amplifier = amplifier;
    this.start_timestamp = start_timestamp;
    this.duration_milliseconds = duration_milliseconds;
};
mf.StatusEffect.prototype.equals = function(other) {
    return this.effect_id === other.effect_id && this.amplifier === other.amplifier && this.start_timestamp === other.start_timestamp && this.duration_milliseconds === other.duration_milliseconds;
};

mf.Face = {
    "NoDirection": -1,
    "NegativeY": 0,
    "PositiveY": 1,
    "NegativeZ": 2,
    "PositiveZ": 3,
    "NegativeX": 4,
    "PositiveX": 5,
};

mf.MobType = {
    "Creeper": 50,
    "Skeleton": 51,
    "Spider": 52,
    "GiantZombie": 53,
    "Zombie": 54,
    "Slime": 55,
    "Ghast": 56,
    "ZombiePigman": 57,
    "Enderman": 58,
    "CaveSpider": 59,
    "Silverfish": 60,
    "Blaze": 61,
    "MagmaCube": 62,
    "EnderDragon": 63,
    "Pig": 90,
    "Sheep": 91,
    "Cow": 92,
    "Chicken": 93,
    "Squid": 94,
    "Wolf": 95,
    "Snowman": 97,
    "Villager": 120
};

mf.StatusEffectType = {
    "Regeneration": 10,
    "Hunger": 17,
    "Poison": 19,
};

mf.StoppedDiggingReason = {
    "BlockBroken": 0,
    "Aborted": 1,
};

mf.Control = {
    "Forward":      0,
    "Back":         1,
    "Left":         2,
    "Right":        3,
    "Jump":         4,
    "Crouch":       5,
    "DiscardItem":  6,
};

mf.AnimationType = {
    "NoAnimation":  0,
    "SwingArm":     1,
    "Damage":       2,
    "Crouch":       104,
    "Uncrouch":     105,
    "Dead":         55061,
};

mf.WindowType = {
    "None":         -2,
    "Inventory":    -1,
    "Chest":        0,
    "Workbench":    1,
    "Furnace":      2,
    "Dispenser":    3,
};

mf.MouseButton = {
    "Left":         false,
    "Right":        true,
};
mf.Dimension = {
    "Normal":   0,
    "Nether":   -1,
}
