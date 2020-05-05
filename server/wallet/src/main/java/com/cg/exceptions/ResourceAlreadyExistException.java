package com.cg.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.ALREADY_REPORTED)
public class ResourceAlreadyExistException extends RuntimeException{
	
	
	private static final long serialVersionUID = 1L;

	public ResourceAlreadyExistException(String message) {
		super(message);
	}

}
