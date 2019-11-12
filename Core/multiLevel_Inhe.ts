class class_one {
  public fun_one(): string{
    return "Class One coming";
  }
}

class class_two extends class_one {
  public fun_two(): string{
    return "Class Two coming";
  }
}

class class_three extends class_two {
  public fun_three(): string{
    return "Class Three coming";
  }
}

let obj:class_three = new class_three();
document.write(obj.fun_one() +"<br>"+ obj.fun_two() +"<br>"+ obj.fun_three());