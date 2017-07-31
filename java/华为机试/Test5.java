//将一个英文语句以单词为单位逆序排放。例如“I am a boy”，逆序排放后为“boy a am I”
//所有单词之间用一个空格隔开，语句中除了英文字母外，不再包含其他字符
package huawei;

import java.util.Scanner;

public class Test5 {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while(in.hasNext()){
			String str = in.nextLine();
			String result = reverse(str);
			System.out.println(result);
		}
	}
	public static String reverse(String sentence){
		String result = "";
		String[] str = sentence.split(" ");
		for(int i = str.length - 1;i >= 0;i--){
			if(i == str.length - 1){
				result = result + str[i];
			}else {
				result = result + " " + str[i];
			}
		}
		return result;
	}
}
