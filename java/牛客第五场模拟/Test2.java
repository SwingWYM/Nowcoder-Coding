//牛牛从生物科研工作者那里获得一段字符串数据s,牛牛需要帮助科研工作者从中找出最长的DNA序列。DNA序列指的是序列中只包括'A','T','C','G'。牛牛觉得这个问题太简单了,就把问题交给你来解决。
//例如: s = "ABCBOATER"中包含最长的DNA片段是"AT",所以最长的长度是2。 
//输入描述:
//输入包括一个字符串s,字符串长度length(1 ≤ length ≤ 50),字符串中只包括大写字母('A'~'Z')。
//
//
//输出描述:
//输出一个整数,表示最长的DNA片段
package niukemoni;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;



public class Test2 {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while(in.hasNext()){
			String[] s = in.nextLine().split("");
			int result = 0;
			int temp = 0;
			List<String> set = new ArrayList<String>(Arrays.asList("G","A","T","C"));
			Set <String> set1 = new HashSet<String>(){
				{
					add("G");
				}
			};
//			set1.add();
			for(int i = 0;i<s.length;i++){
				temp = 0;
				if(set.contains(s[i])){
					for(int j = i;j < s.length;j++){
						if(set.contains(s[j])){
							temp = temp + 1;
						}else{
							break;
						}
					}
					if(temp > result){
						result = temp;
					}
				}
			}
			System.out.println(result);
		}
	}
}
