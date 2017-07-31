//尽管是一个CS专业的学生，小B的数学基础很好并对数值计算有着特别的兴趣，喜欢用计算机程序来解决数学问题，现在，她正在玩一个数值变换的游戏。她发现计算机中经常用不同的进制表示一个数，如十进制数123表达为16进制时只包含两位数7、11（B），用八进制表示为三位数1、7、3，按不同进制表达时，各个位数的和也不同，如上述例子中十六进制和八进制中各位数的和分别是18和11,。 小B感兴趣的是，一个数A如果按2到A-1进制表达时，各个位数之和的均值是多少？她希望你能帮她解决这个问题？ 所有的计算均基于十进制进行，结果也用十进制表示为不可约简的分数形式。 
//输入描述:
//输入中有多组测试数据，每组测试数据为一个整数A(1 ≤ A ≤ 5000).
//
//
//输出描述:
//对每组测试数据，在单独的行中以X/Y的形式输出结果。
package jingdong;

import java.util.Scanner;

public class Test2 {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while(in.hasNext()){
			int a = in.nextInt();
			int sum = 0;
			int m;
			int b;
			b = a;
			if(a < 3){
				m = 1;
			}else{
				m = a - 2;
			}
			while(b != 0){
				sum = sum + b % 2;
				b = b / 2;
			}
			for(int i = 3;i<a;i++){
				b = a;
				while(b != 0){
					sum = sum + b % i;
					b = b / i;
				}
			}
			for(int i = 2;i<=m;i++){
				while(m%i == 0 && sum%i == 0){
					m = m / i;
					sum = sum / i;
				}
			}
			System.out.println(sum + "/" + m);
		}
	}
}
